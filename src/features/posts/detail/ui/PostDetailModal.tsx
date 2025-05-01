import { Modal } from "@/shared/ui/Dialog"

export const PostDetailModal = ({
  showPostDetailDialog,
  setShowPostDetailDialog,
  selectedPost,
  searchQuery,
  highlightText,
  renderComments,
}) => {
  return (
    <Modal
      title={highlightText(selectedPost?.title, searchQuery)}
      open={showPostDetailDialog}
      onOpenChange={setShowPostDetailDialog}
    >
      <div className="space-y-4">
        <p>{highlightText(selectedPost?.body, searchQuery)}</p>
        {renderComments(selectedPost?.id)}
      </div>
    </Modal>
  )
}
