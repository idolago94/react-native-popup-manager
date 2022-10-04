
export interface DefaultTemplateProps {
    title?: string
    content?: string
    confirmButtonText?: string
    cancelButtonText?: string
    onConfirm?(): void
    onCancel?(): void
}