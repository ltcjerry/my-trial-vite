type Options = {
    el: string
}

export const useTransform = (options: Options): Promise<{baseUrl: string}> => {
    const imgTransform = (el: HTMLImageElement) => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = el.width
        canvas.height = el.height
        context?.drawImage(el, 0, 0, canvas.width, canvas.height)
        return canvas.toDataURL('image/png')
    }
    return new Promise((resolve) => {
        onMounted(() => {
            const img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            img.onload = () => {
                resolve({
                    baseUrl: imgTransform(img)
                })
            }
        })
    })
}