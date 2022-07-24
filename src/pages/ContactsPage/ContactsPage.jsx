import Form from "pages/ContactsPage/Form"
import Section from "shared/components/Section"
import Users from "pages/ContactsPage/Users"

const ContactsPage = () => {
  return (
    <>
    <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contancts'}>
        <Users />
      </Section>
      </>
  )
}

export default ContactsPage
