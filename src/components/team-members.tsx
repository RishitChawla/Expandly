import Image from "next/image"

export function TeamMembers() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-center space-y-4 rounded-lg p-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="Team member portrait"
          className="rounded-full"
        />
        <div className="text-center">
          <h3 className="font-bold">Alex Morgan</h3>
          <p className="text-sm text-muted-foreground">Founder & CEO</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 rounded-lg p-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="Team member portrait"
          className="rounded-full"
        />
        <div className="text-center">
          <h3 className="font-bold">Sophia Chen</h3>
          <p className="text-sm text-muted-foreground">Lead Developer</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 rounded-lg p-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="Team member portrait"
          className="rounded-full"
        />
        <div className="text-center">
          <h3 className="font-bold">Miguel Rodriguez</h3>
          <p className="text-sm text-muted-foreground">SEO Specialist</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 rounded-lg p-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="Team member portrait"
          className="rounded-full"
        />
        <div className="text-center">
          <h3 className="font-bold">Emma Johnson</h3>
          <p className="text-sm text-muted-foreground">UX Designer</p>
        </div>
      </div>
    </div>
  )
}
