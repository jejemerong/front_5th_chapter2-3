import { SelectContainer, SelectItem } from "@/shared/ui/Select"
import { Button } from "@/shared/ui/Button"

interface PaginationProps {
  limit: number
  skip: number
  total: number
  onLimitChange: (limit: number) => void
  onSkipChange: (skip: number) => void
}

export const Pagination = ({ limit, skip, total, onLimitChange, onSkipChange }: PaginationProps) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span>표시</span>
      <SelectContainer
        value={limit.toString()}
        onValueChange={(value) => onLimitChange(Number(value))}
        placeholder="10"
      >
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
      </SelectContainer>
      <span>항목</span>
    </div>
    <div className="flex gap-2">
      <Button disabled={skip === 0} onClick={() => onSkipChange(Math.max(0, skip - limit))}>
        이전
      </Button>
      <Button disabled={skip + limit >= total} onClick={() => onSkipChange(skip + limit)}>
        다음
      </Button>
    </div>
  </div>
)
