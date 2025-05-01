import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Dialog"
import { Textarea } from "@/shared/ui/TextArea"

//댓글 수정 대화상자
export const CommentsEditModal = ({
  showEditCommentDialog,
  setShowEditCommentDialog,
  selectedComment,
  setSelectedComment,
  updateComment,
}) => {
  return (
    <Modal title="댓글 수정" open={showEditCommentDialog} onOpenChange={setShowEditCommentDialog}>
      <div className="space-y-4">
        <Textarea
          placeholder="댓글 내용"
          value={selectedComment?.body || ""}
          onChange={(e) => setSelectedComment({ ...selectedComment, body: e.target.value })}
        />
        <Button onClick={updateComment}>댓글 업데이트</Button>
      </div>
    </Modal>
  )
}
