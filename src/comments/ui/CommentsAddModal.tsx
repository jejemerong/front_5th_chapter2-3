import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Dialog"
import { Textarea } from "@/shared/ui/TextArea"

// 댓글 추가 대화상자
export const CommentsAddModal = ({
  showAddCommentDialog,
  setShowAddCommentDialog,
  newComment,
  setNewComment,
  addComment,
}) => {
  return (
    <Modal title="새 댓글 추가" open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <div className="space-y-4">
        <Textarea
          placeholder="댓글 내용"
          value={newComment.body}
          onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
        />
        <Button onClick={addComment}>댓글 추가</Button>
      </div>
    </Modal>
  )
}
