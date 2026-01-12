import { useCallback, useEffect, useRef } from 'react';
import type { AnalyticsEvent, AnalyticsEventType } from '@/types/marketing';

const SUPABASE_URL = 'https://scfgwjnhhfdmvezhkipt.supabase.co';

// Generate a simple visitor ID (persisted in localStorage)
function getVisitorId(): string {
  const key = 'airtory_visitor_id';
  let visitorId = localStorage.getItem(key);
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(key, visitorId);
  }
  return visitorId;
}

// Generate a session ID (persisted in sessionStorage)
function getSessionId(): string {
  const key = 'airtory_session_id';
  let sessionId = sessionStorage.getItem(key);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(key, sessionId);
  }
  return sessionId;
}

// Track a single event
async function trackEvent(event: AnalyticsEvent): Promise<void> {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/track-analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...event,
        visitor_id: getVisitorId(),
        session_id: getSessionId(),
      }),
    });

    if (!response.ok) {
      console.warn('Failed to track analytics event:', event.event_type);
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
}

// Track multiple events at once
async function trackEvents(events: AnalyticsEvent[]): Promise<void> {
  try {
    const visitorId = getVisitorId();
    const sessionId = getSessionId();

    const response = await fetch(`${SUPABASE_URL}/functions/v1/track-analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        events.map((event) => ({
          ...event,
          visitor_id: visitorId,
          session_id: sessionId,
        }))
      ),
    });

    if (!response.ok) {
      console.warn('Failed to track analytics events');
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
}

// Hook for page view tracking
export function usePageView(pageSlug: string) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current && pageSlug) {
      hasTracked.current = true;
      trackEvent({
        event_type: 'page_view',
        page_slug: pageSlug,
      });
    }
  }, [pageSlug]);
}

// Hook for section view tracking (with Intersection Observer)
export function useSectionView(sectionKey: string, pageSlug?: string) {
  const hasTracked = useRef(false);

  return useCallback(
    (node: HTMLElement | null) => {
      if (!node || hasTracked.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTracked.current) {
              hasTracked.current = true;
              trackEvent({
                event_type: 'section_view',
                section_key: sectionKey,
                page_slug: pageSlug,
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(node);
    },
    [sectionKey, pageSlug]
  );
}

// Hook for CTA click tracking
export function useTrackClick() {
  return useCallback(
    (
      elementId: string,
      elementText?: string,
      pageSlug?: string,
      metadata?: Record<string, unknown>
    ) => {
      trackEvent({
        event_type: 'cta_click',
        element_id: elementId,
        element_text: elementText,
        page_slug: pageSlug,
        metadata,
      });
    },
    []
  );
}

// Hook for scroll depth tracking
export function useScrollDepth(pageSlug: string) {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const depths = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackEvent({
            event_type: 'scroll_depth',
            page_slug: pageSlug,
            metadata: { depth },
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageSlug]);
}

// Export the trackEvent function for direct use
export { trackEvent, trackEvents };
