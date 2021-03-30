<template>
    <form @submit="handleForm">
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input
                type="text"
                class="form-control"
                v-model="post.title"
                @blur="$v.post.title.$touch()"
            />
            <template v-if="$v.post.title.$error">
                <span v-if="!$v.post.title.required" class="form-error">Ce champs est requis</span>
                <span v-if="!$v.post.title.minLength" class="form-error">
                    {{ $v.post.title.$params.minLength.min }} chars min
                </span>
                <span v-if="!$v.post.title.maxLength" class="form-error">20 chars max</span>
            </template>
        </div>
        <div class="mb-3">
            <label class="form-label">Body</label>
            <md-editor v-model="post.body"></md-editor>
            {{ post.body }}
        </div>
        <div class="mb-3">
            <label class="form-label">Author</label>
            <input type="text" class="form-control" v-model="post.author" />
        </div>
        <button type="submit">{{ btnSubmitText }}</button>
    </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import MdEditor from './MarkdownEditor.vue'

import { minimal_post } from '../helpers/post'

export default {
    mixins: [validationMixin],

    validations: {
        post: {
            title: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(20)
            },
            body: {
                required,
                minLength: minLength(10),
            }
        }
    },

    props: {
        btnSubmitText: { type: String, default: 'Submit' },
        postData: { type: Object, default: minimal_post() },
    },

    watch: {
        postData: {
            deep: true,
            handler(newData) {
                this.post = newData
            }
        }
    },

    created() {
        this.post = this.postData
    },

    components: {
        MdEditor,
    },

    data() { return {
        post: minimal_post(),
    }},

    methods: {
        handleForm(event) {
            this.$emit('submit', {
                event,
                post: this.post
            })
        }
    }
}
</script>