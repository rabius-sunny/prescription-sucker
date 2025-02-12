import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'

type TProps = {
  currentItem: TemplatesGroupTypes
}
export default function CreateTemplateModal({ currentItem }: TProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Create new <Plus />{' '}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Templates</DialogTitle>
          <DialogDescription>
            Create a {currentItem.name} Templates
          </DialogDescription>
        </DialogHeader>
        <form className='grid gap-4 py-4'>
          <div className='grid gap-1'>
            <Label
              htmlFor='name'
              className='block'
            >
              Name
            </Label>
            <Input
              className='w-full'
              id='name'
            />
          </div>
          <div className='grid gap-1'>
            <Label
              htmlFor='score'
              className='block'
            >
              Score
            </Label>
            <Input
              className='w-full'
              type='number'
              id='score'
            />
          </div>
        </form>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
