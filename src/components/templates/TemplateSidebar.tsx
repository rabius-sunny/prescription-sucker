type TProps = {
  sidebarItems: TemplatesGroupTypes[]
  currentItem: TemplatesGroupTypes
  setCurrentItem: React.Dispatch<React.SetStateAction<TemplatesGroupTypes>>
}

export default function TemplateSidebar({
  sidebarItems,
  currentItem,
  setCurrentItem
}: TProps) {
  return (
    <div className='flex flex-col justify-start items-start p-4 gap-4 mt-8'>
      {sidebarItems.map((item, idx) => (
        <button
          className={
            currentItem.type === item.type
              ? 'underline font-semibold'
              : 'hover:underline'
          }
          onClick={() => setCurrentItem(item)}
          key={idx}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}
