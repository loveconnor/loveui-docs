export type FileType =
  | "image"
  | "video"
  | "document"
  | "archive"
  | "audio"
  | "code"
  | "other"

export interface FileItem {
  id: string
  name: string
  type: FileType
  size: string
  sizeBytes: number
  modifiedAt: string
  createdAt: string
  starred: boolean
  shared: boolean
  folderId: string | null
}

export interface Folder {
  id: string
  name: string
  color: string
  filesCount: number
  size: string
  parentId: string | null
}

export const folders: Folder[] = [
  {
    id: "1",
    name: "Raw Footage",
    color: "#8B5CF6",
    filesCount: 32,
    size: "5.8 GB",
    parentId: null,
  },
  {
    id: "2",
    name: "Field Audio",
    color: "#06B6D4",
    filesCount: 18,
    size: "1.9 GB",
    parentId: null,
  },
  {
    id: "3",
    name: "Research Docs",
    color: "#F59E0B",
    filesCount: 27,
    size: "410 MB",
    parentId: null,
  },
  {
    id: "4",
    name: "Edit Projects",
    color: "#EC4899",
    filesCount: 21,
    size: "3.2 GB",
    parentId: null,
  },
  {
    id: "5",
    name: "Deliverables",
    color: "#10B981",
    filesCount: 9,
    size: "1.3 GB",
    parentId: null,
  },
]

export const files: FileItem[] = [
  {
    id: "f1",
    name: "Kenya_Savannah_Day03_Acam_4K.mov",
    type: "video",
    size: "1.4 GB",
    sizeBytes: 1503238553,
    modifiedAt: "20 min ago",
    createdAt: "Jan 12, 2026",
    starred: true,
    shared: true,
    folderId: "1",
  },
  {
    id: "f2",
    name: "Night_Vision_Hyena_CutB.mp4",
    type: "video",
    size: "842 MB",
    sizeBytes: 882900000,
    modifiedAt: "2 hours ago",
    createdAt: "Jan 11, 2026",
    starred: false,
    shared: true,
    folderId: "1",
  },
  {
    id: "f3",
    name: "Camp_Ambience_Master.wav",
    type: "audio",
    size: "188 MB",
    sizeBytes: 197132288,
    modifiedAt: "1 hour ago",
    createdAt: "Jan 10, 2026",
    starred: true,
    shared: false,
    folderId: "2",
  },
  {
    id: "f4",
    name: "Narration_Pass_V3.wav",
    type: "audio",
    size: "96 MB",
    sizeBytes: 100663296,
    modifiedAt: "Yesterday",
    createdAt: "Jan 9, 2026",
    starred: false,
    shared: true,
    folderId: "2",
  },
  {
    id: "f5",
    name: "Species_Timeline_Outline.docx",
    type: "document",
    size: "2.1 MB",
    sizeBytes: 2202009,
    modifiedAt: "3 hours ago",
    createdAt: "Jan 8, 2026",
    starred: true,
    shared: true,
    folderId: "3",
  },
  {
    id: "f6",
    name: "Permit_Log_Q1_2026.xlsx",
    type: "document",
    size: "640 KB",
    sizeBytes: 655360,
    modifiedAt: "Yesterday",
    createdAt: "Jan 6, 2026",
    starred: false,
    shared: false,
    folderId: "3",
  },
  {
    id: "f7",
    name: "Episode02_Edit_v14.prproj",
    type: "code",
    size: "75 MB",
    sizeBytes: 78643200,
    modifiedAt: "30 min ago",
    createdAt: "Jan 14, 2026",
    starred: true,
    shared: false,
    folderId: "4",
  },
  {
    id: "f8",
    name: "LowerThirds_StyleGuide.fig",
    type: "image",
    size: "18 MB",
    sizeBytes: 18874368,
    modifiedAt: "4 hours ago",
    createdAt: "Jan 5, 2026",
    starred: false,
    shared: true,
    folderId: "4",
  },
  {
    id: "f9",
    name: "Episode02_Master_ProRes.mov",
    type: "video",
    size: "2.0 GB",
    sizeBytes: 2147483648,
    modifiedAt: "2 days ago",
    createdAt: "Jan 4, 2026",
    starred: true,
    shared: false,
    folderId: "5",
  },
  {
    id: "f10",
    name: "Festival_Submission_Package.zip",
    type: "archive",
    size: "426 MB",
    sizeBytes: 446693376,
    modifiedAt: "2 days ago",
    createdAt: "Jan 3, 2026",
    starred: true,
    shared: true,
    folderId: "5",
  },
  {
    id: "f11",
    name: "Map_Overlays_SetA.png",
    type: "image",
    size: "14 MB",
    sizeBytes: 14680064,
    modifiedAt: "5 hours ago",
    createdAt: "Jan 2, 2026",
    starred: false,
    shared: true,
    folderId: "4",
  },
  {
    id: "f12",
    name: "Drone_Path_Metadata.json",
    type: "code",
    size: "340 KB",
    sizeBytes: 348160,
    modifiedAt: "6 hours ago",
    createdAt: "Jan 13, 2026",
    starred: false,
    shared: false,
    folderId: "3",
  },
  {
    id: "f13",
    name: "Lion_Pride_Closeup_FrameGrab.jpg",
    type: "image",
    size: "9.8 MB",
    sizeBytes: 10276044,
    modifiedAt: "1 day ago",
    createdAt: "Jan 1, 2026",
    starred: true,
    shared: true,
    folderId: "1",
  },
  {
    id: "f14",
    name: "Interview_Transcript_DrSafi.pdf",
    type: "document",
    size: "3.4 MB",
    sizeBytes: 3565158,
    modifiedAt: "3 days ago",
    createdAt: "Dec 30, 2025",
    starred: false,
    shared: true,
    folderId: "3",
  },
  {
    id: "f15",
    name: "Color_Grade_LUTs.cube",
    type: "other",
    size: "12 KB",
    sizeBytes: 12288,
    modifiedAt: "2 hours ago",
    createdAt: "Dec 29, 2025",
    starred: false,
    shared: false,
    folderId: "4",
  },
  {
    id: "f16",
    name: "Episode03_RoughAssembly_v05.prproj",
    type: "code",
    size: "62 MB",
    sizeBytes: 65011712,
    modifiedAt: "8 hours ago",
    createdAt: "Dec 28, 2025",
    starred: false,
    shared: false,
    folderId: "4",
  },
  {
    id: "f17",
    name: "Backup_FieldCards_Week2.7z",
    type: "archive",
    size: "970 MB",
    sizeBytes: 1017118720,
    modifiedAt: "4 days ago",
    createdAt: "Dec 27, 2025",
    starred: false,
    shared: false,
    folderId: "5",
  },
  {
    id: "f18",
    name: "WindNoise_Reduction_Profile.xml",
    type: "code",
    size: "86 KB",
    sizeBytes: 88064,
    modifiedAt: "Yesterday",
    createdAt: "Dec 26, 2025",
    starred: true,
    shared: false,
    folderId: "2",
  },
  {
    id: "f19",
    name: "Narrative_BeatBoard.pdf",
    type: "document",
    size: "1.8 MB",
    sizeBytes: 1887436,
    modifiedAt: "5 days ago",
    createdAt: "Dec 24, 2025",
    starred: true,
    shared: true,
    folderId: "3",
  },
  {
    id: "f20",
    name: "Streaming_Delivery_H264.mp4",
    type: "video",
    size: "612 MB",
    sizeBytes: 641728512,
    modifiedAt: "1 week ago",
    createdAt: "Dec 22, 2025",
    starred: false,
    shared: true,
    folderId: "5",
  },
]

export const storageData = {
  used: 12.6,
  total: 20,
  breakdown: [
    { type: "Images", size: 1.9, color: "#8B5CF6" },
    { type: "Videos", size: 7.2, color: "#EC4899" },
    { type: "Documents", size: 1.3, color: "#F59E0B" },
    { type: "Archives", size: 1.5, color: "#10B981" },
    { type: "Other", size: 0.7, color: "#6B7280" },
  ],
}
