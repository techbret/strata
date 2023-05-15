export default function VideoPage() {
    return (
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
              commodo do ea.
            </p> */}
            <video
                        
                        className="mx-auto w-full h-full"
                        src={"https://ucarecdn.com/13184304-ebea-4b77-862a-1ad603b8d23d/"}
                        controls
                      >
                        Your browser does not support the video tag.
                      </video>
            <div className="mt-10 flex items-center justify-center gap-x-6">
          
            </div>
          </div>
        </div>
      </div>
    )
  }
  