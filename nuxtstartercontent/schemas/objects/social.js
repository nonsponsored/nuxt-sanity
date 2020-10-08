const services = ['twitter', 'instagram', 'github', 'linkedIn']

export default {
  name: 'social',
  type: 'document',
  title: 'Social Media Links',
  /**
   * Loop through the array of service keys, and return the field configuration.
   * The title will be generated from `name`
   *  */
  fields: services
    .map(name => ({
      name,
      type: 'url',
      description: `The full URL to the ${name} profile`
    }))
    .concat({
      name: 'website',
      type: 'url',
      title: 'Website',
      description: 'The URL for the website'
    })
}