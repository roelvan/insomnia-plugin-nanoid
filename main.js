const { nanoid, customAlphabet } = require('nanoid')

module.exports.templateTags = [
  {
    displayName: 'nanoid',
    name: 'nanoid',
    description: "generate nanoid's",
    args: [
      {
        displayName: 'Length',
        defaultValue: 21,
        type: 'number',
      },
      {
        displayName: 'Lowercase',
        defaultValue: false,
        type: 'boolean',
      },
      {
        displayName: 'Alphabet',
        type: 'string',
      },
    ],
    run(context, length, isLowercase, alphabet) {
      const id = alphabet ? customAlphabet(alphabet, length)() : nanoid(length)
      return isLowercase ? id.toLowerCase() : id
    },
  },
]
