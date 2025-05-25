<template>
	<footer class="footer">
		<div class="container">
			<span>all rights reserved</span>
		</div>
	</footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
	height: 76px;
}

.footer {
	padding: 30px 0;
	color: #000;
	font-size: 13px;
	background-color: var(--gray-bg);

	& .container {
		display: flex;
		justify-content: center;
	}
}
</style>
