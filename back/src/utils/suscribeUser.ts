import axios from 'axios'
import { audienceId } from '../utils/constants'
import { apiKey } from '../utils/constants'

export const suscribeUser = async (postData: any) => {
    console.log(audienceId, apiKey)

    console.log(postData)

    await axios.post(
        `https://us17.api.mailchimp.com/3.0/lists/${audienceId}/`,
        postData,
        {
            headers: {
                Authorization: `auth ${apiKey}`,
            },
        }
    )
}
