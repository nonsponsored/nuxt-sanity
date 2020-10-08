export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Sub-Title',
      name: 'sub_title',
      type: 'string',
    },
    {
      title: 'Hero Image',
      name: 'hero_image',
      type: 'image',
      
      fields: [
	    {
		  title: 'Alt Text',
	      name: 'alt_text',
	      type: 'string',
	      options: {
		    isHighlighted: true
      	  }
	    },
	    {
		  title: 'Caption',
	      name: 'caption',
	      type: 'string',
	      options: {
		    isHighlighted: true
      	  }
	    }
	  ]
    },
    {
      title: 'Post Text',
      name: 'post_text',
      type: 'array',
      of: [
	    {
	      type: 'block'
	    }
	  ]
    }
  ]
}