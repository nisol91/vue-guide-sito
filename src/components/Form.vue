<template>
	<div class="col-md-4">
		<b-form @submit.stop.prevent="onSubmit">
			<b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
				<b-form-input id="example-input-1" name="example-input-1" v-model="$v.form.name.$model"
					:state="$v.form.name.$dirty ? !$v.form.name.$error : null" aria-describedby="input-1-live-feedback">
				</b-form-input>


				<b-form-invalid-feedback id="input-1-live-feedback">
					This is a required field and must be at least 5 characters. thanks...
				</b-form-invalid-feedback>
			</b-form-group>


			<b-form-group id="example-input-group-3" label="Mail" label-for="example-input-3">

			<b-form-input id="example-input-3" name="example-input-3" v-model="$v.form.mail.$model"
				:state="$v.form.mail.$dirty ? !$v.form.mail.$error : null" aria-describedby="input-3-live-feedback">
			</b-form-input>

			<b-form-invalid-feedback id="input-3-live-feedback">
				This must be an email sir... </b-form-invalid-feedback>
			</b-form-group>


			<b-form-group id="example-input-group-2" label="Food" label-for="example-input-2">
				<b-form-select id="example-input-2" name="example-input-2" v-model="$v.form.food.$model"
					:options="foods" :state="$v.form.food.$dirty ? !$v.form.food.$error : null"
					aria-describedby="input-2-live-feedback"></b-form-select>

				<b-form-invalid-feedback id="input-2-live-feedback">
					This is a required field.
				</b-form-invalid-feedback>
			</b-form-group>

			<b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
		</b-form>
	</div>
</template>

<script>
	import {
		validationMixin
	} from 'vuelidate'
	import {
		required,
		minLength,
		email
	} from 'vuelidate/lib/validators'

	export default {
		mixins: [validationMixin],
		data() {
			return {
				foods: ['apple', 'orange'],
				form: {
					name: null,
					food: null
				}
			}
		},
		validations: {
			form: {
				food: {
					required
				},
				name: {
					required,
					minLength: minLength(5),
				},
				mail: {
					required,
					email,
				}
			}
		},
		methods: {
			onSubmit() {
				this.$v.form.$touch()
				if (this.$v.form.$anyError) {
					return
				}

				// Form submit logic
			}
		}
	}
</script>