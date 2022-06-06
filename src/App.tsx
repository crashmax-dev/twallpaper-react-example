import { useRef, useEffect, useState } from 'react'
import { TWallpaper } from 'twallpaper'
import type { TWallpaperOptions } from 'twallpaper'
import 'twallpaper/dist/twallpaper.css'

export default function App() {
  const ref = useRef<HTMLDivElement>(null)
  const [options] = useState<TWallpaperOptions>({
    tails: 10,
    colors: ['#efd359', '#e984d8', '#ac86ed', '#40cdde'],
    pattern: {
      image: 'https://crashmax-dev.github.io/twallpaper/patterns/animals.svg'
    }
  })

  useEffect(() => {
    const wallpaper = new TWallpaper(ref.current, options)
    wallpaper.updateFrametime(90)
  }, [])

  return <div className="tw-wrap" ref={ref}></div>
}
