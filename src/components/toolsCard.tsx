import Image from 'next/image'

const toolsCard = ({
  title,
  description,
  img,
  link,
}: { title: string; description: string; img: string; link: string }) => {
  return (
    <div className='max-w-md bg-bg border-1 border-fg rounded-lg shadow-sm flex'>
      <div className='p-2 border-r-1 border-fg flex items-center'>
        <Image
          src={img}
          alt=''
          width={110}
          height={110}
          className='rounded-md'
        />
      </div>
      <div className='p-2 flex flex-col'>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='hover:underline'
        >
          <h3 className='mb-2 md:text-lg tracking-tight text-fg'>{title}</h3>
        </a>
        <p className='mb-3 text-sm text-fg-2'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='inline-flex text-sm items-center text-pr hover:underline ml-auto'
        >
          つかってみる
          <Image
            src='/images/linkOut.svg'
            alt=''
            width={16}
            height={16}
            className='ml-1'
          />
        </a>
      </div>
    </div>
  )
}

export default toolsCard
