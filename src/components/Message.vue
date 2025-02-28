<template>
    <div class="message-container">
        <p> {{ msg }} </p>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String
    }
}
</script>

<style >
    .message-container {
        color: #ffffff;
        background-color: #ff9100;
        border: 2px solid #ffffff;
        text-align: center;
        border-radius: 8px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>