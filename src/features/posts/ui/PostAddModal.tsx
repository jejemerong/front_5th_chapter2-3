import { Modal } from "@/shared/ui/Dialog"
import { Input } from "@/shared/ui/Input"
import { Textarea } from "@/shared/ui/TextArea"
import { Button } from "@/shared/ui/Button"

export const PostAddModal = ({ showAddDialog, setShowAddDialog, newPost, setNewPost, addPost }) => {
  return (
    <Modal title="새 게시물 추가" open={showAddDialog} onOpenChange={setShowAddDialog}>
      <div className="space-y-4">
        <Input
          placeholder="제목"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <Textarea
          rows={30}
          placeholder="내용"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <Input
          type="number"
          placeholder="사용자 ID"
          value={newPost.userId}
          onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
        />
        <Button onClick={addPost}>게시물 추가</Button>
      </div>
    </Modal>
  )
}
