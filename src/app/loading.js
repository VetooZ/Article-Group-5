
const Loading = () => {
    return (
        <div className="bg-white dark:bg-primary absolute top-0 left-0 w-full min-h-full z-[-1]">

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex justify-center items-center loading"></div>
            </div>
        </div>
    )
}

export default Loading