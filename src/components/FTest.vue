<script>
export default {
    functional: true,
    props: ['level'],
    render(h, context) {
        console.log(context)
        return h(`h${context.props.level}`, {}, context.children)
    }
}
</script>