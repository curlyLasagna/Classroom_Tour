export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Building: {
        Row: {
          ADDRESS: string | null
          BUILDING_CODE: string
          BUILDING_NAME: string
          CAMPUS: string
          GOOGLE_MAP_LINK: string | null
          GOOGLE_QUERY_NAME: string | null
          LATITUDE: string | null
          LONGITUDE: string | null
          PRECINCT: string | null
        }
        Insert: {
          ADDRESS?: string | null
          BUILDING_CODE: string
          BUILDING_NAME: string
          CAMPUS: string
          GOOGLE_MAP_LINK?: string | null
          GOOGLE_QUERY_NAME?: string | null
          LATITUDE?: string | null
          LONGITUDE?: string | null
          PRECINCT?: string | null
        }
        Update: {
          ADDRESS?: string | null
          BUILDING_CODE?: string
          BUILDING_NAME?: string
          CAMPUS?: string
          GOOGLE_MAP_LINK?: string | null
          GOOGLE_QUERY_NAME?: string | null
          LATITUDE?: string | null
          LONGITUDE?: string | null
          PRECINCT?: string | null
        }
        Relationships: []
      }
      Buildings_Test: {
        Row: {
          address: string | null
          id: number
          name: string
        }
        Insert: {
          address?: string | null
          id?: number
          name: string
        }
        Update: {
          address?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      Items: {
        Row: {
          CAMPUS: string | null
          CATEGORY_CODE: string | null
          COLLECTION_CODE: string | null
          ID: number
          MFG_CODE: string | null
          MFG_MAKE_AND_MODEL: string | null
          QUANTITY: number | null
        }
        Insert: {
          CAMPUS?: string | null
          CATEGORY_CODE?: string | null
          COLLECTION_CODE?: string | null
          ID?: number
          MFG_CODE?: string | null
          MFG_MAKE_AND_MODEL?: string | null
          QUANTITY?: number | null
        }
        Update: {
          CAMPUS?: string | null
          CATEGORY_CODE?: string | null
          COLLECTION_CODE?: string | null
          ID?: number
          MFG_CODE?: string | null
          MFG_MAKE_AND_MODEL?: string | null
          QUANTITY?: number | null
        }
        Relationships: []
      }
      Rooms: {
        Row: {
          ASSISTIVE_LISTENING_TYPE: string | null
          CAMPUS: string | null
          COLLECTION_CODE: string
          COLLECTION_OFFLINE: boolean | null
          COLLECTION_TYPE_CODE: string | null
          COLLEGE_CODE: string | null
          CONT_SYS_INTERFACE_TYPE: string | null
          CONT_SYS_MAC: string | null
          CONT_SYS_NAME: string | null
          CONT_SYS_PROCESSOR: string | null
          CONTENT_CAPTURE_TYPE: string | null
          DEPARTMENT_CODE: string | null
          DIVISION_CODE: string | null
          ENTRY_METHOD: string | null
          FED_ROOM_TYPE_CODE: number | null
          ID: number
          POWER_MAC: string | null
          POWER_NAME: string | null
          POWER_TYPE: string | null
          ROUTER_MAC: string | null
          SCHED_SYS_MAC: string | null
          SCHED_SYS_NAME: string | null
          SCHED_SYS_SOURCE: string | null
          SEATS_WITH_PCS: string | null
          SEATS_WITHOUT_PCS: number | null
          STF_ELIGIBLE: boolean | null
          TWO_WAY_VIDEO: string | null
          WIRELESS_PROJECTION: string | null
        }
        Insert: {
          ASSISTIVE_LISTENING_TYPE?: string | null
          CAMPUS?: string | null
          COLLECTION_CODE: string
          COLLECTION_OFFLINE?: boolean | null
          COLLECTION_TYPE_CODE?: string | null
          COLLEGE_CODE?: string | null
          CONT_SYS_INTERFACE_TYPE?: string | null
          CONT_SYS_MAC?: string | null
          CONT_SYS_NAME?: string | null
          CONT_SYS_PROCESSOR?: string | null
          CONTENT_CAPTURE_TYPE?: string | null
          DEPARTMENT_CODE?: string | null
          DIVISION_CODE?: string | null
          ENTRY_METHOD?: string | null
          FED_ROOM_TYPE_CODE?: number | null
          ID?: number
          POWER_MAC?: string | null
          POWER_NAME?: string | null
          POWER_TYPE?: string | null
          ROUTER_MAC?: string | null
          SCHED_SYS_MAC?: string | null
          SCHED_SYS_NAME?: string | null
          SCHED_SYS_SOURCE?: string | null
          SEATS_WITH_PCS?: string | null
          SEATS_WITHOUT_PCS?: number | null
          STF_ELIGIBLE?: boolean | null
          TWO_WAY_VIDEO?: string | null
          WIRELESS_PROJECTION?: string | null
        }
        Update: {
          ASSISTIVE_LISTENING_TYPE?: string | null
          CAMPUS?: string | null
          COLLECTION_CODE?: string
          COLLECTION_OFFLINE?: boolean | null
          COLLECTION_TYPE_CODE?: string | null
          COLLEGE_CODE?: string | null
          CONT_SYS_INTERFACE_TYPE?: string | null
          CONT_SYS_MAC?: string | null
          CONT_SYS_NAME?: string | null
          CONT_SYS_PROCESSOR?: string | null
          CONTENT_CAPTURE_TYPE?: string | null
          DEPARTMENT_CODE?: string | null
          DIVISION_CODE?: string | null
          ENTRY_METHOD?: string | null
          FED_ROOM_TYPE_CODE?: number | null
          ID?: number
          POWER_MAC?: string | null
          POWER_NAME?: string | null
          POWER_TYPE?: string | null
          ROUTER_MAC?: string | null
          SCHED_SYS_MAC?: string | null
          SCHED_SYS_NAME?: string | null
          SCHED_SYS_SOURCE?: string | null
          SEATS_WITH_PCS?: string | null
          SEATS_WITHOUT_PCS?: number | null
          STF_ELIGIBLE?: boolean | null
          TWO_WAY_VIDEO?: string | null
          WIRELESS_PROJECTION?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
