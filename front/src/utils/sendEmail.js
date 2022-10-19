import axios from 'axios'

export const sendEmail = async (values) => {
    try {
        await axios.post('http://localhost:4000/sendMail/contact', values)
        return true
    } catch (error) {
        return false
    }
}
