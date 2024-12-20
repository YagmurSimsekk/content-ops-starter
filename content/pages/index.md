---
title: Home
slug: /
sections:
  - type: GenericSection
    media:
      #url: /images/main-hero.svg
      url: /images/main.png
      #altText: 'Main hero image'
      width: 100%
      height: auto
      #fallbackUrl: /images/main-hero.png
      elementId: ''
      type: ImageBlock
      className: hidden md:block # Hide image on mobile, show on desktop
    text: >
      <!-- Mobile-only block -->
      <div className="block md:hidden flex flex-col items-center justify-center">
        <h1 className="text-dark-mobile text-3xl font-newFont">Willkommen bei Hautarzt Herr Semizel Dermatologie</h1>
        <img src="/images/main.png" alt="Main hero image" className="w-full h-auto mb-4">
      </div>

      <!-- Desktop-only title -->
      <div className="hidden md:block">
        <h1 className="text-dark text-6xl font-newFont">Willkommen bei Hautarzt Herr Semizel Dermatologie</h1>
      </div>

      <!-- Text displayed for both mobile and desktop -->

      In der Semizel Dermatologie in Wilmersdorf widmen wir uns der Bereitstellung von hochwertiger, persönlicher dermatologischer Betreuung. Unsere hochmoderne Klinik ist mit der neuesten Hautpflegetechnologie ausgestattet, um sicherzustellen, dass jede Behandlung auf Ihre individuellen Bedürfnisse zugeschnitten ist.

    #title:
    #  text: |
    #    Willkommen bei Hautarzt Herr Semizel Dermatologie
    #  color: text-dark
    #  type: TitleBlock
    #actions:
    #  - label: Get started
    #    altText: ''
    #    url: /
    #    showIcon: false
    #    icon: arrowRight
    #    iconPosition: right
    #    style: secondary
    #    elementId: ''
    #    type: Button
    #  - label: See Tutorials
    #    altText: ''
    #    url: /
    #    showIcon: true
    #    icon: arrowRight
    #    iconPosition: right
    #    style: primary
    #    elementId: ''
    #    type: Link
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: FeaturedItemsSection
    #title:
    #  text: Key Benefits
    #  color: text-dark
    #  styles:
    #    self:
    #      textAlign: center
    #  type: TitleBlock
    #subtitle: Subtitle goes here
    items:
      - type: FeaturedItem
        title: Unser Team
        #subtitle: Numbers Done
        text: >-
          Unser Team besteht aus erfahrenen Dermatologen und Pflegekräften, die Ihnen bei allen Fragen und Bedürfnissen zur Seite stehen.
        actions:
          - label: Unser Team
            altText: ''
            url: /careers
            showIcon: false
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
            type: Button
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: center
        image:
          type: ImageBlock
          altText: Lightning bolt symbol on red background
          elementId: ''
          url: /images/icon1-mobile.png
          styles:
            self:
              borderRadius: x-large 
      - title: Kontaktieren Sie uns
        #subtitle: The Job Stuff
        text: >-
          Haben Sie Fragen oder möchten einen Termin vereinbaren? Kontaktieren Sie uns noch heute.
        image:
          url: /images/icon2-new.png
          altText: Featured icon two
          elementId: ''
          type: ImageBlock
        actions:
          - label: Kontakt
            altText: ''
            url: /blog/
            showIcon: false
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
            type: Button
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: center
            justifyContent: center
        type: FeaturedItem
      - title: Termin
        #subtitle: Faster
        text: >-
          Termine können Sie entweder telefonisch oder per E-Mail oder bequem über unsere Online-Terminbuchung vereinbaren.
        image:
          url: /images/icon3-new.png
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
        actions:
          - label: Termin vereinbaren
            altText: ''
            url: /blog/
            showIcon: false
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
            type: Button
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: center
        type: FeaturedItem
    #actions:
    #  - label: Get started
    #    altText: ''
    #    url: /
    #    showIcon: false
    #    icon: arrowRight
    #    iconPosition: right
    #    style: primary
    #    elementId: ''
    #    type: Button
    #badge:
    #  label: This is a badge
    #  color: text-primary
    #  styles:
    #    self:
    #      textAlign: center
    #  type: Badge
    elementId: ''
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  #- subtitle: Preisgekrönte Unternehmen vertrauen uns
  #  images:
  #    - url: /images/empathy-logo.svg
  #      altText: Empathy logo
  #      type: ImageBlock
  #    - url: /images/wellster-logo.svg
  #      altText: Wellster logo
  #      type: ImageBlock
  #    - url: /images/vise-logo.svg
  #      altText: Vise logo
  #      type: ImageBlock
  #    - url: /images/telus-logo.svg
  #      altText: Telus logo
  #      type: ImageBlock
  #    - url: /images/contenful-logo.svg
  #      altText: Contentful logo
  #      type: ImageBlock
  #    - url: /images/sanity-logo.svg
  #      altText: Sanity logo
  #      type: ImageBlock
  #    - url: /images/rangle-logo.svg
  #      altText: Rangle logo
  #      type: ImageBlock
  #  motion: move-to-left
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      justifyContent: center
  #    subtitle:
  #      textAlign: center
  #  type: ImageGallerySection
  #- posts:
  #    - content/pages/blog/case-study-1.md
  #    - content/pages/blog/case-study-2.md
  #    - content/pages/blog/case-study-3.md
  #  showThumbnail: true
  #  showDate: true
  #  showAuthor: true
  #  variant: three-col-grid
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      padding:
  #        - pt-16
  #        - pl-16
  #        - pb-16
  #        - pr-16
  #      justifyContent: center
  #  type: FeaturedPostsSection
  #  hoverEffect: move-up
  #- title: Divider
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      padding:
  #        - pt-7
  #        - pl-7
  #        - pb-7
  #        - pr-7
  #  type: DividerSection
  #- title:
  #    text: Grow your business 10x faster
  #    color: text-dark
  #    styles:
  #      self:
  #        textAlign: center
  #    type: TitleBlock
  #  subtitle: This is a subtitle
  #  text: |-
  #    Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
  #    Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
  #    erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
  #    vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
  #  media:
  #    title: Title of the video
  #    url: /images/placeholder-video.mp4
  #    controls: false
  #    aspectRatio: '16:9'
  #    styles:
  #      self:
  #        padding:
  #          - pt-2
  #          - pb-2
  #          - pl-2
  #          - pr-2
  #        borderColor: border-dark
  #        borderStyle: solid
  #        borderWidth: 1
  #        borderRadius: large
  #    type: VideoBlock
  #    autoplay: true
  #    loop: true
  #    muted: true
  #  badge:
  #    label: Key Benefits
  #    color: text-primary
  #    styles:
  #      self:
  #        textAlign: center
  #    type: Badge
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      flexDirection: col
  #      justifyContent: center
  #    subtitle:
  #      textAlign: center
  #  type: GenericSection
  #- type: GenericSection
  #  title:
  #    text: Generic section with a video
  #    color: text-dark
  #    styles:
  #      self:
  #        textAlign: left
  #    type: TitleBlock
  #  subtitle: Section with a video subtitle
  #  text: |-
  #    Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
  #    Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
  #    erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
  #    vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
  #  actions: []
  #  media:
  #    title: Title of the video
  #    url: /images/placeholder-video.mp4
  #    autoplay: true
  #    loop: true
  #    muted: true
  #    controls: false
  #    aspectRatio: '16:9'
  #    styles:
  #      self:
  #        padding:
  #          - pt-2
  #          - pb-2
  #          - pl-2
  #          - pr-2
  #        borderColor: border-dark
  #        borderStyle: solid
  #        borderWidth: 1
  #        borderRadius: large
  #    type: VideoBlock
  #  elementId: null
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      flexDirection: row
  #      justifyContent: center
  #    subtitle:
  #      textAlign: left
  #- title:
  #    text: Social Media Management
  #    color: text-dark
  #    type: TitleBlock
  #  subtitle: Increase your reach
  #  text: >
  #    A service that helps businesses to manage their social media accounts and
  #    posts.
  #  actions:
  #    - label: Get started
  #      url: /
  #      icon: arrowRight
  #      iconPosition: right
  #      style: secondary
  #      type: Button
  #    - label: See Tutorials
  #      url: /
  #      showIcon: true
  #      icon: arrowRight
  #      iconPosition: right
  #      style: primary
  #      type: Link
  #  media:
  #    url: /images/hero2.svg
  #    altText: Fun feature preview
  #    type: ImageBlock
  #  badge:
  #    label: This is a badge
  #    color: text-primary
  #    type: Badge
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      alignItems: center
  #  type: GenericSection
  #- title: Divider
  #  colors: bg-light-fg-dark
  #  styles:
  #    self:
  #      padding:
  #        - pt-7
  #        - pl-7
  #        - pb-7
  #        - pr-7
  #  type: DividerSection
  - title:
      text: Hinterlassen Sie uns eine Bewertung!
      color: text-dark
      type: TitleBlock
    #subtitle: Be in good company
    text: >
      Wir schätzen das Feedback unserer Patienten. Ihre Rückmeldungen sind entscheidend, da sie uns helfen, uns zu verbessern!
    actions:
      - label: Klicken Sie hier
        url: https://www.google.com/maps/place/Dr.+(TR)+Kivanc+M.+Semizel,+Facharzt+f%C3%BCr+Dermatologie+%26+Venerologie,+%C3%84sthetische+Medizin/@52.5681238,13.314859,11z/data=!4m6!3m5!1s0x8871f8b66bea8033:0x185c049397178d24!8m2!3d52.5068441!4d13.4247318!16s%2Fg%2F11v_4d2y4b?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D
        showIcon: true
        icon: arrowRight
        style: primary
        type: Link
      #- label: See Tutorials
      #  url: /
      #  showIcon: true
      #  icon: arrowRight
      #  iconPosition: right
      #  style: primary
      #  type: Link
    media:
      url: /images/googlereview-new.png
      altText: Dope design preview
      type: ImageBlock
      className: hidden md:block
    #badge:
    #  label: This is a badge
    #  color: text-primary
    #  type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
    type: GenericSection
#  - title: Divider
#    colors: bg-light-fg-dark
#    styles:
#      self:
#        padding:
#          - pt-7
#          - pl-7
#          - pb-7
#          - pr-7
#    type: DividerSection
#- type: CarouselSection
#  title: null
#  subtitle: Was unsere Patienten über uns sagen
#  items:
#    - title: >-
#        "A designer knows he has achieved perfection not when there is nothing
#        left to add, but when there is nothing left to take away."
#      tagline: Testimonial 1
#      subtitle: 'Maria Walters, Company'
#      text: >-
#        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
#        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
#        explicabo.
#      image:
#        url: /images/person-placeholder-light.png
#        altText: Maria Walters
#        styles:
#          self:
#            borderRadius: full
#        type: ImageBlock
#      actions: []
#      colors: bg-neutralAlt-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-9
#            - pb-9
#            - pl-9
#            - pr-9
#          textAlign: left
#          borderRadius: large
#          flexDirection: row
#          justifyContent: center
#      type: FeaturedItem
#    - title: >-
#        "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose."
#      tagline: Testimonial 2
#      subtitle: 'John Doe, Company'
#      text: >-
#        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
#        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
#        explicabo.
#      image:
#        url: /images/person-placeholder-light.png
#        altText: John Doe
#        styles:
#          self:
#            borderRadius: full
#        type: ImageBlock
#      actions: []
#      colors: bg-neutralAlt-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-9
#            - pb-9
#            - pl-9
#            - pr-9
#          textAlign: left
#          borderRadius: large
#          flexDirection: row
#          justifyContent: center
#      type: FeaturedItem
#    - title: >-
#        "Design is how it works, how it functions. Good design doesn't just make a product aesthetically pleasing, it makes it a pleasure to use."
#      tagline: Testimonial 3
#      subtitle: 'Maria Walters, Company'
#      text: >-
#        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
#        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
#        explicabo.
#      image:
#        url: /images/person-placeholder-light.png
#        altText: Maria Walters
#        styles:
#          self:
#            borderRadius: full
#        type: ImageBlock
#      actions: []
#      colors: bg-neutralAlt-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-9
#            - pb-9
#            - pl-9
#            - pr-9
#          textAlign: left
#          borderRadius: large
#          flexDirection: row
#          justifyContent: center
#      type: FeaturedItem
#    - title: >-
#        "A designer knows he has achieved perfection not when there is nothing
#        left to add, but when there is nothing left to take away."
#      tagline: Testimonial 4
#      subtitle: 'Maria Walters, Company'
#      text: >-
#        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
#        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
#        explicabo.
#      image:
#        url: /images/person-placeholder-light.png
#        altText: Maria Walters
#        styles:
#          self:
#            borderRadius: full
#        type: ImageBlock
#      actions: []
#      colors: bg-neutralAlt-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-9
#            - pb-9
#            - pl-9
#            - pr-9
#          textAlign: left
#          borderRadius: large
#          flexDirection: row
#          justifyContent: center
#      type: FeaturedItem
#    - title: >-
#        "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated."
#      tagline: Testimonial 5
#      subtitle: 'Jane Walters, Company'
#      text: >-
#        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
#        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
#        explicabo.
#      image:
#        url: /images/person-placeholder-light.png
#        altText: Maria Walters
#        styles:
#          self:
#            borderRadius: full
#        type: ImageBlock
#      actions: []
#      colors: bg-neutralAlt-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-9
#            - pb-9
#            - pl-9
#            - pr-9
#          textAlign: left
#          borderRadius: large
#          flexDirection: row
#          justifyContent: center
#      type: FeaturedItem
#    - title: >-
#        "Quote from some important person goes right here. I love using Netlify Create."
#      tagline: Testimonial 6
#      subtitle: 'Jane Doe, Company'
#      text: >-
#        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
#        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
#        explicabo.
#      image:
#        url: /images/img-placeholder-dark.png
#        altText: Jane Doe
#        styles:
#          self:
#            borderRadius: full
#        type: ImageBlock
#      actions: []
#      colors: bg-dark-fg-light
#      styles:
#        self:
#          padding:
#            - pt-9
#            - pb-9
#            - pl-9
#            - pr-9
#          textAlign: left
#          borderRadius: large
#          flexDirection: row
#          justifyContent: center
#      type: FeaturedItem
#  elementId: null
#  variant: next-prev-nav
#  colors: bg-light-fg-dark
#  styles:
#    self:
#      justifyContent: center
#    subtitle:
#      textAlign: center
##- title:
#    text: List of features here
#    color: text-primary
#    styles:
#      self:
#        textAlign: center
#    type: TitleBlock
#  subtitle: Featured items section subtitle
#  items:
#    - title: Feature Item One
#      tagline: This is the tagline
#      subtitle: This is the item subtitle
#      text: |
#        Follow the tutorial to build your first Netlify Create site.
#      image:
#        url: /images/abstract-feature1.svg
#        altText: Placeholder Image
#        styles:
#          self:
#            borderRadius: x-large
#        type: ImageBlock
#      colors: bg-light-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-8
#            - pl-8
#            - pb-8
#            - pr-8
#          borderRadius: x-large
#          flexDirection: col
#      type: FeaturedItem
#    - title: Feature Item Two
#      tagline: This is the tagline
#      subtitle: This is the item subtitle
#      text: |
#        Follow the tutorial to build your first awesome Netlify Create site.
#      image:
#        url: /images/abstract-feature2.svg
#        altText: Placeholder image
#        styles:
#          self:
#            borderRadius: x-large
#        type: ImageBlock
#      colors: bg-light-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-8
#            - pl-8
#            - pb-8
#            - pr-8
#          borderRadius: x-large
#          flexDirection: col
#      type: FeaturedItem
#    - title: Feature Item Three
#      tagline: This is the tagline
#      subtitle: This is the item subtitle
#      text: |
#        Learn from the tutorial and build your first awesome Netlify Create site.
#      image:
#        url: /images/abstract-feature1.svg
#        altText: Placeholder image
#        styles:
#          self:
#            borderRadius: x-large
#        type: ImageBlock
#      colors: bg-light-fg-dark
#      styles:
#        self:
#          padding:
#            - pt-8
#            - pl-8
#            - pb-8
#            - pr-8
#          borderRadius: x-large
#          flexDirection: col
#      type: FeaturedItem
#  variant: three-col-grid
#  colors: bg-neutral-fg-dark
#  styles:
#    self:
#      padding:
#        - pt-16
#        - pl-8
#        - pb-16
#        - pr-8
#      justifyContent: center
#    subtitle:
#      textAlign: center
#  type: FeaturedItemsSection
#  - title:
#      text: Generic Section With A Form
#      color: text-dark
#      type: TitleBlock
#    subtitle: Section with a form subtitle
#    text: |-
#      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
#      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
#      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
#      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
#    media:
#      fields:
#        - name: name
#          label: Name
#          hideLabel: true
#          placeholder: Your name
#          isRequired: true
#          width: full
#          type: TextFormControl
#        - name: email
#          label: Email
#          hideLabel: true
#          placeholder: Your email
#          isRequired: true
#          width: full
#          type: EmailFormControl
#        - name: message
#          label: Message
#          hideLabel: true
#          placeholder: Your message
#          width: full
#          type: TextareaFormControl
#      elementId: contact-form
#      styles:
#        self:
#          padding:
#            - pt-6
#            - pb-6
#            - pl-6
#            - pr-6
#          borderColor: border-dark
#          borderStyle: solid
#          borderWidth: 1
#          borderRadius: large
#      type: FormBlock
#      submitButton:
#        type: SubmitButtonFormControl
#        label: Submit
#        showIcon: false
#        icon: arrowRight
#        iconPosition: right
#        style: primary
#        elementId: null
#    badge:
#      label: Contact Us
#      color: text-primary
#      type: Badge
#    colors: bg-light-fg-dark
#    type: GenericSection
seo:
  metaTitle: Home - Wilmersdorf Dermatologie
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
