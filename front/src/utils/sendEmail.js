import axios from 'axios'
const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const sendEmail = async (values) => {
    try {
        await axios.post(`${API_ROUTE}/sendMail/contact`, values)
        return true
    } catch (error) {
        return false
    }
}
