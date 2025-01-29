import randomGradient from '@/lib/randomGradient'
import Image from 'next/image'
import styles from './post_thumbnail.module.css'

const gradient = randomGradient()

export default ({
  thumbnail = '/images/pencil01.svg',
  width = 60,
  height = 60,
}: { thumbnail?: string; width: number; height: number }) => {
  return <Image src={thumbnail} alt={''} width={width} height={height} />
}
