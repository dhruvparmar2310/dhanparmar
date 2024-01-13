import React from 'react'
import { Form } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { FaInstagram, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const ContactUs = () => {
  const {
    handleSubmit,
    formState: { errors },
    control, watch
  } = useForm({ mode: 'all' })

  function onSubmit (data) {
  }
  return (
        <>
            <section className='contact section' id='contact'>
                <h2 data-heading='Get in Touch' className='section-title'>Let&apos;s discuss your Project</h2>

                <div className="contact-container container grid">
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-card">
                                <IoMdMail className='card-icon' />

                                <h3 className="card-title">Email</h3>
                                <span className="card-data">dhanparmar23@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact-info mt-2">
                            <div className="contact-card">
                                <FaWhatsapp className='card-icon' />

                                <h3 className="card-title">Whatsapp</h3>
                                <span className="card-data">9586627577</span>
                            </div>
                        </div>

                        <div className="contact-info mt-2">
                            <div className="contact-card">
                                <FaInstagram className='card-icon' />

                                <h3 className="card-title">Instagram</h3>
                                <span className="card-data">@dhan.parmar23</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-content">
                        <Form className='step-one' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                            <div className='input-container'>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Controller
                                        name='sName'
                                        control={control}
                                        rules={{ required: { value: true, message: '' } }}
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Form.Control
                                                ref={ref}
                                                type="text"
                                                placeholder="Enter your name"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                    {errors.sName && <Form.Control.Feedback type='invalid'>{errors.sName.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </div>
                            <div className='input-container mt-2'>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Controller
                                        name='sSubject'
                                        control={control}
                                        rules={{ required: { value: true, message: '' } }}
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Form.Control
                                                ref={ref}
                                                type="text"
                                                placeholder="Enter topic to discuss"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                    {errors.sSubject && <Form.Control.Feedback type='invalid'>{errors.sSubject.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </div>
                            <div className='input-container mt-2'>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Controller
                                        name='sMessage'
                                        control={control}
                                        rules={{ required: { value: true, message: '' } }}
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Form.Control
                                                as="textarea"
                                                style={{ height: '100px' }}
                                                ref={ref}
                                                placeholder="Enter the message..."
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                    {errors.sMessage && <Form.Control.Feedback type='invalid'>{errors.sMessage.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </div>

                            <div className='mt-3'>
                                <a href={`https://wa.me/9586627577?text=Hello%20there,%20myself%20${watch('sName')}%20and%2C%20I%20wanted%20to%20discuss%20about%20${watch('sSubject')}%20that%20${watch('sMessage')}`} className='button'>
                                    <FaPaperPlane className='button-icon' /> Send Message
                                </a>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
  )
}

export default ContactUs
