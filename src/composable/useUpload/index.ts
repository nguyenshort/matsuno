import { AxiosInstance } from 'axios'
import { message } from 'ant-design-vue'

export const useUpload = () => {
  const axios = inject<AxiosInstance>('$axios')!

  const uploadFunc = async (data: Record<string, any>, group: string) => {
    const formData = new FormData()
    Object.entries(data).forEach(([name, value]) => {
      formData.append(name, value)
    })
    const res: any = await axios.post('/geto/upload/' + group, formData)
    return res.file
  }

  const image = async (image: Blob, endpoint: string) => {
    const formData = new FormData()
    formData.append('image', image)
    formData.append('endpoint', endpoint)

    const res: any = await axios.post('/geto/upload/single', formData)
    message.success('Upload hình ảnh thành công')
    return res?.file
  }

  const document = async (document: Blob, endpoint: string) => {
    const file = await uploadFunc({ document, endpoint }, 'document')
    message.success('Upload tài liệu thành công')
    return file
  }

  return {
    image,
    document
  }
}
