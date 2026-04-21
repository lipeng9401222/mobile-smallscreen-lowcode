<script>
import origin from '{{@originalFilePath}}';

export default {
    ...origin,
    data() {
        return {
            ...origin.data(),
            activeNames: [1, 2, 3, 4, 5, 6, 7, 8]
        };
    },
    mounted() {
        this.menu.push({
            title: '个性化示例',
            children: [
                {
                    title: '个性化页面',
                    to: 'examples/customize'
                }
            ]
        });
    }
};
</script>
