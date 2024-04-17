This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## Components API

Here you may find a list of the most common components and their API:

- #### component Logo

| Prop        | Default | Description                                                         |
| ----------- | ------- | ------------------------------------------------------------------- |
| `onClick`   | --      | optional, `() => void`, add the function of closing the mobile-menu |
| `className` | --      | optional, `string`, adds custom css class to the Logo               |

- #### Socials

| Prop        | Value    | Description                                    |
| ----------- | -------- | ---------------------------------------------- |
| `className` | `string` | optional, adds custom css class to the Socials |

- #### SocialsItem

| Prop    | Value    | Description                                         |
| ------- | -------- | --------------------------------------------------- |
| `name`  | `string` | required, specifies the name of the SocialsItem     |
| `href`  | `string` | required, specifies the URL of the link             |
| `ariaL` | `string` | optional, adds custom aria-label to the SocialsItem |

- #### component Modal

| Prop        | Default | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `onClose`   | --      | required, `() => void`, add the function of closing the modal |
| `children`  | --      | optional, `React.ReactNode`, React components                 |
| `className` | --      | optional, `string`, adds custom css class to the Modal        |

- #### component Notification

| Prop   | Default | Description                                       |
| ------ | ------- | ------------------------------------------------- |
| `type` | --      | required, `sucess`, `error`, type of notification |

- #### component FormInput

| Prop       | Default | Description                                                                       |
| ---------- | ------- | --------------------------------------------------------------------------------- |
| `config`   | --      | required, `FormInputsConfig`, config props - name, label, placeholder, validation |
| `textarea` | --      | required, `boolean`, specifies if component input or textarea                     |
| `register` | --      | required, `UseFormRegister`, register an input element and apply validation rules |
| `errors`   | --      | optional, `object`, contains inputs' errors data                                  |

- #### component Checkbox

| Prop            | Default | Description                                                                       |
| --------------- | ------- | --------------------------------------------------------------------------------- |
| `register`      | --      | required, `UseFormRegister`, register an input element and apply validation rules |
| `errors`        | --      | optional, `object`, contains inputs' errors data                                  |
| `checkboxInput` | --      | optional, `string`                                                                |

- #### Card

| Prop              | Value       | Description                                          |
| ----------------- | ----------- | ---------------------------------------------------- |
| `children`        | `ReactNode` | required, card elements                              |
| `className`       | `string`    | optional, adds custom css class or property          |
| `isFeatures`      | `boolean`   | optional, set paddings, width for Features card      |
| `isUniqueness`    | `boolean`   | optional, set paddings, width for Uniqueness card    |
| `isConsultations` | `boolean`   | optional, set paddings, width for Consultations card |
| `isReviews`       | `boolean`   | optional, set paddings, width for Reviews card       |
| `isCommunities`   | `boolean`   | optional, set paddings, width for Communities card   |

- #### FeaturesCard

| Prop         | Value                                       | Description                                     |
| ------------ | ------------------------------------------- | ----------------------------------------------- |
| `card`       | `{id: number, title: string, text: string}` | required, card data                             |
| `className`  | `string`                                    | optional, adds custom css class or property     |
| `isFeatures` | `boolean`                                   | optional, set paddings, width for Features card |

- #### Contacts

| Prop        | Value     | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `className` | `string`  | optional, adds custom css class or property     |
| `isFooter`  | `boolean` | optional, set icon-color, text-color for Footer |

- #### NavBarDropdownList

| Prop       | Value     | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `isOpen`   | `boolean` | required, set visibility of the component |
| `pathname` | `string`  | required, set styles acc. to pathname     |

- #### Button

| Prop        | Value                       | Description                                            |
| ----------- | --------------------------- | ------------------------------------------------------ |
| `children`  | `React.ReactNode or string` | required, button content                               |
| `type`      | `submit or button`          | required, type ofbutton                                |
| `onClick`   | `function`                  | optional, add effect on click event                    |
| `className` | `string`                    | optional, you can add some additional styles if needed |

- #### SiteLink

| Prop        | Value                       | Description                                            |
| ----------- | --------------------------- | ------------------------------------------------------ |
| `linkType`  | `scroll or link`            | required, type of link                                 |
| `isAccent`  | `boolean`                   | required, defines if link has accent styles or not     |
| `href`      | `string`                    | required, sets the link address                        |
| `children`  | `React.ReactNode or string` | required, link content                                 |
| `className` | `string`                    | optional, you can add some additional styles if needed |

- #### FeedbackCard

| Prop   | Value                           | Description             |
| ------ | ------------------------------- | ----------------------- |
| `data` | `{text: string, owner: string}` | required, set card data |

- #### UniquenessCard

| Prop        | Value    | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| `total`     | `string` | required, sets amount at card                          |
| `text`      | `string` | required, sets text at card                            |
| `className` | `string` | optional, you can add some additional styles if needed |

- #### RequestCard

| Prop         | Value                                                  | Description                                            |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`     | `{mobImage: string, tabImage: string, pcImage:string}` | required, set of images for card                       |
| `alt`        | `string`                                               | required, alt of image                                 |
| `requestSet` | `string[]`                                             | required, set of client's requests                     |
| `className`  | `string`                                               | optional, you can add some additional styles if needed |

- #### Slider

| Prop        | Value                                                            | Description                                                  |
| ----------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| `data`      | `array[]`                                                        | required, data that is needed to render a list of components |
| `component` | `component`                                                      | required, set it as slide component                          |
| `section`   | `community` / `reviews` / `requestsMain` / `requestsConsultancy` | required, set specific options                               |
| `className` | `string`                                                         | optional, you can add some additional styles if needed       |

- #### CommunityCard

| Prop        | Value                          | Description                                            |
| ----------- | ------------------------------ | ------------------------------------------------------ |
| `data`      | `{text: string, logo: string}` | required, set card data                                |
| `className` | `string`                       | optional, you can add some additional styles if needed |

- #### CourseList

| Prop        | Value    | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| `className` | `string` | optional, you can add some additional styles if needed |
