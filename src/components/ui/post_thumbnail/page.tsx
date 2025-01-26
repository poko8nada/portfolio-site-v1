import randomGradient from '@/lib/randomGradient'
import Image from 'next/image'
import styles from './post_thumbnail.module.css'

const gradient = randomGradient()

export default ({
  thumbnail = '/images/pencil01.svg',
  size = 60,
}: { thumbnail?: string; size: number }) => {
  return (
    <div className={styles.img_container} style={{ background: gradient }}>
      <Image src={thumbnail} alt={''} width={size} height={size} />
    </div>
  )
}
