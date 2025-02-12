import { templateTypes } from '@/assets/fackData'
import CreateTemplateList from '@/components/templates/CreateTemplateList'
import CreateTemplateModal from '@/components/templates/CreateTemplateModal'
import TemplateSidebar from '@/components/templates/TemplateSidebar'
import { useState } from 'react'

export default function CreateTemplate() {
  const [currentItem, setCurrentItem] = useState(templateTypes[0])
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-1 border-r-2 border-slate-300 h-screen'>
        <TemplateSidebar
          setCurrentItem={setCurrentItem}
          sidebarItems={templateTypes}
          currentItem={currentItem}
        />
      </div>
      <div className='col-span-5 pl-4 max-w-xl'>
        <div className='flex items-center justify-between w-full mt-10'>
          <h1 className='text-xl font-bold'>
            All {currentItem.name} Templates
          </h1>
          <CreateTemplateModal currentItem={currentItem} />
        </div>

        <CreateTemplateList currentType={currentItem} />
      </div>
    </div>
  )
}
