import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Dialog"
import { Input } from "@/shared/ui/Input"
import { Textarea } from "@/shared/ui/TextArea"
import { usePostModalStore } from "../model/usePostModalStore"
import { useUpdatePostMutation } from "../model/useUpdatePostMutation"
import { usePostsStore } from "@/entities/posts/model/usePostsStore"

export const PostEditModal = () => {
  const { showEditDialog, setShowEditDialog, selectedPost, setSelectedPost } = usePostModalStore()
  const { posts, setPosts } = usePostsStore()
  const { mutateAsync: updatePost } = useUpdatePostMutation()
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
        <Button
          onClick={async () => {
            const result = await updatePost(selectedPost!)
            console.log("result", result)
            const newPosts = posts.map((post) => (post.id === selectedPost?.id ? selectedPost : post))
            setPosts(newPosts) // message: ok 가 들어온다면, 그 목록은 selectedPost을 수동으로 store 에 넣는다.
            setShowEditDialog(false)
          }}
        >
          게시물 업데이트
        </Button>
      </div>
    </Modal>
  )
}
