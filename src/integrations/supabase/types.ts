export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ad_formats: {
        Row: {
          category: string | null
          created_at: string
          demo_url: string | null
          description: string | null
          id: string
          is_active: boolean
          is_featured: boolean
          name: string
          order_index: number
          preview_image_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          demo_url?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          is_featured?: boolean
          name: string
          order_index?: number
          preview_image_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          demo_url?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          is_featured?: boolean
          name?: string
          order_index?: number
          preview_image_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ad_formats_preview_image_id_fkey"
            columns: ["preview_image_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_events: {
        Row: {
          created_at: string
          element_id: string | null
          element_text: string | null
          event_type: Database["public"]["Enums"]["analytics_event_type"]
          id: string
          metadata: Json | null
          page_slug: string | null
          referrer: string | null
          section_key: string | null
          session_id: string | null
          user_agent: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          visitor_id: string | null
        }
        Insert: {
          created_at?: string
          element_id?: string | null
          element_text?: string | null
          event_type: Database["public"]["Enums"]["analytics_event_type"]
          id?: string
          metadata?: Json | null
          page_slug?: string | null
          referrer?: string | null
          section_key?: string | null
          session_id?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          visitor_id?: string | null
        }
        Update: {
          created_at?: string
          element_id?: string | null
          element_text?: string | null
          event_type?: Database["public"]["Enums"]["analytics_event_type"]
          id?: string
          metadata?: Json | null
          page_slug?: string | null
          referrer?: string | null
          section_key?: string | null
          session_id?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          visitor_id?: string | null
        }
        Relationships: []
      }
      assets: {
        Row: {
          alt_text: string | null
          caption: string | null
          created_at: string
          file_size: number | null
          height: number | null
          id: string
          metadata: Json | null
          public_url: string | null
          storage_path: string
          type: Database["public"]["Enums"]["asset_type"]
          width: number | null
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_size?: number | null
          height?: number | null
          id?: string
          metadata?: Json | null
          public_url?: string | null
          storage_path: string
          type?: Database["public"]["Enums"]["asset_type"]
          width?: number | null
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_size?: number | null
          height?: number | null
          id?: string
          metadata?: Json | null
          public_url?: string | null
          storage_path?: string
          type?: Database["public"]["Enums"]["asset_type"]
          width?: number | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string | null
          content: string | null
          created_at: string
          excerpt: string | null
          id: string
          order_index: number
          published: boolean
          published_at: string | null
          slug: string
          thumbnail_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          order_index?: number
          published?: boolean
          published_at?: string | null
          slug: string
          thumbnail_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          order_index?: number
          published?: boolean
          published_at?: string | null
          slug?: string
          thumbnail_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_thumbnail_id_fkey"
            columns: ["thumbnail_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      client_logos: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          logo_asset_id: string | null
          name: string
          order_index: number
          website_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          logo_asset_id?: string | null
          name: string
          order_index?: number
          website_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          logo_asset_id?: string | null
          name?: string
          order_index?: number
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_logos_logo_asset_id_fkey"
            columns: ["logo_asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          company: string | null
          country: string | null
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string | null
          name: string
          phone: string | null
          referral_code: string | null
          submission_type: string | null
        }
        Insert: {
          company?: string | null
          country?: string | null
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message?: string | null
          name: string
          phone?: string | null
          referral_code?: string | null
          submission_type?: string | null
        }
        Update: {
          company?: string | null
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string | null
          name?: string
          phone?: string | null
          referral_code?: string | null
          submission_type?: string | null
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          is_active: boolean
          order_index: number
          question: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          question: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          question?: string
        }
        Relationships: []
      }
      navigation_items: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          label: string
          navigation_type: string
          open_in_new_tab: boolean
          order_index: number
          parent_id: string | null
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          label: string
          navigation_type?: string
          open_in_new_tab?: boolean
          order_index?: number
          parent_id?: string | null
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          label?: string
          navigation_type?: string
          open_in_new_tab?: boolean
          order_index?: number
          parent_id?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "navigation_items_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "navigation_items"
            referencedColumns: ["id"]
          },
        ]
      }
      page_sections: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          order_index: number
          page_id: string
          section_key: Database["public"]["Enums"]["section_key"]
          settings: Json | null
          subtitle: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          page_id: string
          section_key: Database["public"]["Enums"]["section_key"]
          settings?: Json | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          page_id?: string
          section_key?: Database["public"]["Enums"]["section_key"]
          settings?: Json | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          created_at: string
          id: string
          og_image_url: string | null
          published: boolean
          seo_description: string | null
          seo_title: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          og_image_url?: string | null
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          og_image_url?: string | null
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      section_blocks: {
        Row: {
          asset_id: string | null
          block_type: Database["public"]["Enums"]["block_type"]
          content: Json
          created_at: string
          id: string
          is_active: boolean
          order_index: number
          section_id: string
          updated_at: string
        }
        Insert: {
          asset_id?: string | null
          block_type: Database["public"]["Enums"]["block_type"]
          content?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          section_id: string
          updated_at?: string
        }
        Update: {
          asset_id?: string | null
          block_type?: Database["public"]["Enums"]["block_type"]
          content?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          section_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "section_blocks_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "section_blocks_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "page_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          id: string
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          id?: string
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          id?: string
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          company: string | null
          created_at: string
          id: string
          image_asset_id: string | null
          is_active: boolean
          is_featured: boolean
          name: string
          order_index: number
          quote: string
          role: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          id?: string
          image_asset_id?: string | null
          is_active?: boolean
          is_featured?: boolean
          name: string
          order_index?: number
          quote: string
          role?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          id?: string
          image_asset_id?: string | null
          is_active?: boolean
          is_featured?: boolean
          name?: string
          order_index?: number
          quote?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_image_asset_id_fkey"
            columns: ["image_asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      traffic_partners: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          logo_asset_id: string | null
          name: string
          order_index: number
          website_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          logo_asset_id?: string | null
          name: string
          order_index?: number
          website_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          logo_asset_id?: string | null
          name?: string
          order_index?: number
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "traffic_partners_logo_asset_id_fkey"
            columns: ["logo_asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      analytics_event_type:
        | "page_view"
        | "section_view"
        | "cta_click"
        | "demo_request_submit"
        | "contact_form_submit"
        | "scroll_depth"
        | "time_on_page"
      app_role: "admin" | "editor" | "viewer"
      asset_type: "image" | "video" | "logo" | "icon"
      block_type:
        | "text"
        | "image"
        | "button"
        | "card"
        | "carousel"
        | "faq"
        | "form"
        | "testimonial"
        | "logo_grid"
        | "video"
        | "feature_list"
        | "stat"
        | "cta"
      section_key:
        | "hero"
        | "publishers"
        | "agencies"
        | "brands"
        | "clients"
        | "features"
        | "analytics"
        | "formats"
        | "ad_experiences"
        | "traffic_partners"
        | "testimonials"
        | "faq"
        | "blogs"
        | "contact"
        | "footer"
        | "navigation"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      analytics_event_type: [
        "page_view",
        "section_view",
        "cta_click",
        "demo_request_submit",
        "contact_form_submit",
        "scroll_depth",
        "time_on_page",
      ],
      app_role: ["admin", "editor", "viewer"],
      asset_type: ["image", "video", "logo", "icon"],
      block_type: [
        "text",
        "image",
        "button",
        "card",
        "carousel",
        "faq",
        "form",
        "testimonial",
        "logo_grid",
        "video",
        "feature_list",
        "stat",
        "cta",
      ],
      section_key: [
        "hero",
        "publishers",
        "agencies",
        "brands",
        "clients",
        "features",
        "analytics",
        "formats",
        "ad_experiences",
        "traffic_partners",
        "testimonials",
        "faq",
        "blogs",
        "contact",
        "footer",
        "navigation",
      ],
    },
  },
} as const
