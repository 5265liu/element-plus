export type ListType = 'text' | 'picture' | 'picture-card'

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

export type UploadFile = {
  name: string
  percentage?: number
  status: UploadStatus
  size: number
  response?: unknown
  uid: number
  url?: string
  raw: ElFile
}

export interface ElFile extends File {
  uid: number
}

export interface ElUploadProgressEvent extends ProgressEvent {
  percent: number
}

export interface ElUploadAjaxError extends Error {
  status: number
  method: string
  url: string
}

export interface ElUploadRequestOptions {
  action: string
  data: Record<string, string | Blob>
  filename: string
  file: File
  headers: Headers
  onError: (e: Error) => void
  onProgress: (e: ProgressEvent) => void
  onSuccess: (response: XMLHttpRequestResponseType) => unknown
  withCredentials: boolean
}

export interface ElUpload {
  accept: string
  headers?: Headers
  data?: Record<string, unknown>
  multiple?: boolean
  name?: string
  drag?: boolean
  withCredentials?: boolean
  showFileList?: boolean
  type?: string
  beforeUpload?: () => void
  beforeRemove?: () => void
  onRemove?: () => void
  onChange?: () => void
  onPreview?: () => void
  onSuccess?: () => void
  onProgress?: () => void
  onError?: () => void
  dragOver: boolean
  genUid: () => number
  tempIndex: number
  handleError: () => void
  handleProgress: () => void
  handleRemove: () => void
  handleStart: () => void
  handleSuccess: () => void
  uploadDisabled: boolean
  uploadFiles: UploadFile[]
  submit: () => void
  clearFiles: () => void
}