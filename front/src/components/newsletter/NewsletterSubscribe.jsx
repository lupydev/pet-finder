import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from './NewsletterForm'

const URL = import.meta.env.VITE_APP_MAILCHIMP_URL

const NewsletterSubscribe = () => {
    return (
        <MailchimpSubscribe
            url={URL}
            render={(props) => {
                const { subscribe, status, message } = props || {}

                return (
                    <NewsletterForm
                        onSubmitted={(formData) => subscribe(formData)}
                        status={status}
                        message={message}
                    />
                )
            }}
        />
    )
}

export default NewsletterSubscribe
