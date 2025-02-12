import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type TProps = {
  currentType: TemplatesGroupTypes
}

export default function CreateTemplateList({ currentType }: TProps) {
  console.log('current type', currentType)
  return (
    <div className='mt-10'>
      <form className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='template-name'>Template Name</Label>
          <Input
            id='template-name'
            placeholder='Enter template name'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='template-content'>Template Content</Label>
          <Input
            id='template-content'
            placeholder='Enter template content'
          />
        </div>
        <Button type='submit'>Create Template</Button>
      </form>
    </div>
  )
}
