<template>
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <div class="top-inputs">
      <p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email"/>
      </p>
    </div>
    <p>
      <label for="message">Message:</label>
      <textarea name="message" id="message" rows="6"></textarea>
    </p>
    <p>
      <button type="submit">Send<i class="arrow"></i></button>
    </p>
  </form>
</template>

<script>
  export default {
    name: "contact-form",
  }
</script>

<style lang="scss" scoped>
  button {
    all: unset;
    cursor: pointer;
  }

  .arrow {
    margin-left: 4px;
    width: 12px;
    height: 12px;
  }

  .top-inputs {
    display: flex;
    flex-direction: column;
    > p {
      flex: 0 0 48%
    }
    @media (min-width: 640px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>