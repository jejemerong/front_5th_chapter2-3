import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Dialog"
import { Input } from "@/shared/ui/Input"
import { Textarea } from "@/shared/ui/TextArea"

export const PostEditModal = ({ showEditDialog, setShowEditDialog, selectedPost, setSelectedPost, updatePost }) => {
  return (
    <Modal title="게시물 수정" open={showEditDialog} onOpenChange={setShowEditDialog}>
      <div className="space-y-4">
        <Input
          placeholder="제목"
          value={selectedPost?.title || ""}
          onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
        />
        <Textarea
          rows={15}
          placeholder="내용"
          value={selectedPost?.body || ""}
          onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
        />
        <Button onClick={updatePost}>게시물 업데이트</Button>
      </div>
    </Modal>
  )
}
