export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          background_color: string | null
          created_at: string
          id: string
          name: string
          page_type: Database["public"]["Enums"]["page_type_enum"]
          parent_id: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          background_color?: string | null
          created_at?: string
          id?: string
          name: string
          page_type?: Database["public"]["Enums"]["page_type_enum"]
          parent_id?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          background_color?: string | null
          created_at?: string
          id?: string
          name?: string
          page_type?: Database["public"]["Enums"]["page_type_enum"]
          parent_id?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          post_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          post_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          post_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          button_color: string | null
          button_secondary_color: string | null
          category_id: string | null
          created_at: string
          description: string
          entrance_fee: string | null
          event_date: string
          event_time: string
          id: string
          image: string | null
          images: string[] | null
          location: string | null
          maps_url: string | null
          owner_name: string | null
          phone: string | null
          social_media: Json | null
          title: string
          updated_at: string
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          button_color?: string | null
          button_secondary_color?: string | null
          category_id?: string | null
          created_at?: string
          description: string
          entrance_fee?: string | null
          event_date: string
          event_time: string
          id?: string
          image?: string | null
          images?: string[] | null
          location?: string | null
          maps_url?: string | null
          owner_name?: string | null
          phone?: string | null
          social_media?: Json | null
          title: string
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          button_color?: string | null
          button_secondary_color?: string | null
          category_id?: string | null
          created_at?: string
          description?: string
          entrance_fee?: string | null
          event_date?: string
          event_time?: string
          id?: string
          image?: string | null
          images?: string[] | null
          location?: string | null
          maps_url?: string | null
          owner_name?: string | null
          phone?: string | null
          social_media?: Json | null
          title?: string
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      facebook_users: {
        Row: {
          created_at: string | null
          email: string | null
          facebook_id: string
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          facebook_id: string
          id?: never
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          facebook_id?: string
          id?: never
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      followers: {
        Row: {
          created_at: string
          follower_id: string | null
          following_id: string | null
          id: string
        }
        Insert: {
          created_at?: string
          follower_id?: string | null
          following_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          follower_id?: string | null
          following_id?: string | null
          id?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      news: {
        Row: {
          button_color: string | null
          category_id: string | null
          content: string
          created_at: string
          date: string
          id: string
          image: string | null
          images: string[] | null
          instagram_media: Json | null
          title: string
          updated_at: string
          video: string | null
        }
        Insert: {
          button_color?: string | null
          category_id?: string | null
          content: string
          created_at?: string
          date?: string
          id?: string
          image?: string | null
          images?: string[] | null
          instagram_media?: Json | null
          title: string
          updated_at?: string
          video?: string | null
        }
        Update: {
          button_color?: string | null
          category_id?: string | null
          content?: string
          created_at?: string
          date?: string
          id?: string
          image?: string | null
          images?: string[] | null
          instagram_media?: Json | null
          title?: string
          updated_at?: string
          video?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_news_category"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "news_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          read: boolean | null
          reference_id: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          read?: boolean | null
          reference_id?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          read?: boolean | null
          reference_id?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      page_permissions: {
        Row: {
          created_at: string
          id: string
          page_path: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          page_path: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          page_path?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      places: {
        Row: {
          address: string
          category_id: string | null
          created_at: string
          description: string | null
          entrance_fee: string | null
          id: string
          image: string | null
          images: string[] | null
          maps_url: string | null
          name: string
          opening_hours: string | null
          owner_name: string | null
          phone: string | null
          social_media: Json | null
          updated_at: string
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          address: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          entrance_fee?: string | null
          id?: string
          image?: string | null
          images?: string[] | null
          maps_url?: string | null
          name: string
          opening_hours?: string | null
          owner_name?: string | null
          phone?: string | null
          social_media?: Json | null
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          address?: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          entrance_fee?: string | null
          id?: string
          image?: string | null
          images?: string[] | null
          maps_url?: string | null
          name?: string
          opening_hours?: string | null
          owner_name?: string | null
          phone?: string | null
          social_media?: Json | null
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "places_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          image_url: string
          updated_at: string
          user_id: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url: string
          updated_at?: string
          user_id: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          bio: string | null
          birth_date: string | null
          city: string | null
          created_at: string
          email: string | null
          house_number: string | null
          id: string
          name: string
          phone: string | null
          postal_code: string | null
          street: string | null
          updated_at: string
          username: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          house_number?: string | null
          id: string
          name: string
          phone?: string | null
          postal_code?: string | null
          street?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          house_number?: string | null
          id?: string
          name?: string
          phone?: string | null
          postal_code?: string | null
          street?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      site_configuration: {
        Row: {
          background_color: string
          bottom_nav_icon_color: string
          bottom_nav_primary_color: string
          bottom_nav_secondary_color: string
          bottom_nav_text_color: string
          button_primary_color: string
          button_secondary_color: string
          created_at: string
          enable_dark_mode: boolean | null
          enable_weather: boolean | null
          font_size: string | null
          footer_address: string | null
          footer_address_cep: string | null
          footer_contact_email: string | null
          footer_contact_phone: string | null
          footer_copyright_text: string | null
          footer_primary_color: string
          footer_schedule: string | null
          footer_secondary_color: string
          footer_social_facebook: string | null
          footer_social_instagram: string | null
          footer_text_color: string
          header_alerts: Json | null
          high_contrast: boolean | null
          id: string
          language: string | null
          location_city: string | null
          location_country: string | null
          location_lat: number | null
          location_lng: number | null
          location_state: string | null
          meta_author: string | null
          meta_description: string | null
          meta_image: string | null
          meta_title: string | null
          navbar_color: string
          navbar_logo_image: string | null
          navbar_logo_text: string | null
          navbar_logo_type: string
          navbar_social_facebook: string | null
          navbar_social_instagram: string | null
          navigation_links: Json | null
          primary_color: string
          secondary_color: string
          text_color: string
          theme_name: string
          updated_at: string
          version: number | null
          weather_api_key: string | null
        }
        Insert: {
          background_color?: string
          bottom_nav_icon_color?: string
          bottom_nav_primary_color?: string
          bottom_nav_secondary_color?: string
          bottom_nav_text_color?: string
          button_primary_color?: string
          button_secondary_color?: string
          created_at?: string
          enable_dark_mode?: boolean | null
          enable_weather?: boolean | null
          font_size?: string | null
          footer_address?: string | null
          footer_address_cep?: string | null
          footer_contact_email?: string | null
          footer_contact_phone?: string | null
          footer_copyright_text?: string | null
          footer_primary_color?: string
          footer_schedule?: string | null
          footer_secondary_color?: string
          footer_social_facebook?: string | null
          footer_social_instagram?: string | null
          footer_text_color?: string
          header_alerts?: Json | null
          high_contrast?: boolean | null
          id?: string
          language?: string | null
          location_city?: string | null
          location_country?: string | null
          location_lat?: number | null
          location_lng?: number | null
          location_state?: string | null
          meta_author?: string | null
          meta_description?: string | null
          meta_image?: string | null
          meta_title?: string | null
          navbar_color?: string
          navbar_logo_image?: string | null
          navbar_logo_text?: string | null
          navbar_logo_type?: string
          navbar_social_facebook?: string | null
          navbar_social_instagram?: string | null
          navigation_links?: Json | null
          primary_color?: string
          secondary_color?: string
          text_color?: string
          theme_name?: string
          updated_at?: string
          version?: number | null
          weather_api_key?: string | null
        }
        Update: {
          background_color?: string
          bottom_nav_icon_color?: string
          bottom_nav_primary_color?: string
          bottom_nav_secondary_color?: string
          bottom_nav_text_color?: string
          button_primary_color?: string
          button_secondary_color?: string
          created_at?: string
          enable_dark_mode?: boolean | null
          enable_weather?: boolean | null
          font_size?: string | null
          footer_address?: string | null
          footer_address_cep?: string | null
          footer_contact_email?: string | null
          footer_contact_phone?: string | null
          footer_copyright_text?: string | null
          footer_primary_color?: string
          footer_schedule?: string | null
          footer_secondary_color?: string
          footer_social_facebook?: string | null
          footer_social_instagram?: string | null
          footer_text_color?: string
          header_alerts?: Json | null
          high_contrast?: boolean | null
          id?: string
          language?: string | null
          location_city?: string | null
          location_country?: string | null
          location_lat?: number | null
          location_lng?: number | null
          location_state?: string | null
          meta_author?: string | null
          meta_description?: string | null
          meta_image?: string | null
          meta_title?: string | null
          navbar_color?: string
          navbar_logo_image?: string | null
          navbar_logo_text?: string | null
          navbar_logo_type?: string
          navbar_social_facebook?: string | null
          navbar_social_instagram?: string | null
          navigation_links?: Json | null
          primary_color?: string
          secondary_color?: string
          text_color?: string
          theme_name?: string
          updated_at?: string
          version?: number | null
          weather_api_key?: string | null
        }
        Relationships: []
      }
      stores: {
        Row: {
          address: string
          category_id: string | null
          created_at: string
          description: string | null
          entrance_fee: string | null
          id: string
          image: string | null
          images: string[] | null
          maps_url: string | null
          name: string
          opening_hours: string | null
          owner_name: string | null
          phone: string | null
          social_media: Json | null
          updated_at: string
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          address: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          entrance_fee?: string | null
          id?: string
          image?: string | null
          images?: string[] | null
          maps_url?: string | null
          name: string
          opening_hours?: string | null
          owner_name?: string | null
          phone?: string | null
          social_media?: Json | null
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          address?: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          entrance_fee?: string | null
          id?: string
          image?: string | null
          images?: string[] | null
          maps_url?: string | null
          name?: string
          opening_hours?: string | null
          owner_name?: string | null
          phone?: string | null
          social_media?: Json | null
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_store_category"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stores_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
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
          _user_id?: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      page_type: "events" | "places" | "stores"
      page_type_enum: "events" | "places" | "stores" | "news"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
