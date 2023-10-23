import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex justify-center md:justify-start">
      <Image
        src="/vercel.svg"
        width={500}
        height={300}
        alt="Picture of the author"
        className='md:w-96 w-60 md:pl-0 p-3'
      />
    </div>
  )
}