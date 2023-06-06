<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'bottom'
	};
</script>

<span class="longhorn text-lg object-contain text-center">
	<span class="[&>*]:pointer-events-none" use:popup={popupClick}>
		<span class="text-3xl">University of Texas at Austin</span>
		<span class="text-lg w-3/5">
			<div class="card p-4 w-72 variant-filled-tertiary" data-popup="popupClick">
				<span class="longhornGif">
					<div style="width:100%;height:0;padding-bottom:56%;position:relative;">
						<iframe
							src="https://giphy.com/embed/L2g7SGGUlP4GUFj9Vm"
							title="longhornGIF"
							width="100%"
							height="100%"
							style="position:absolute"
							frameBorder="0"
							class="giphy-embed"
							allowFullScreen
						/>
					</div>
					<p>
						<a href="https://giphy.com/gifs/espn-sports-fan-sad-texas-L2g7SGGUlP4GUFj9Vm"
							>Sad Longhorn via GIPHY</a
						>
					</p>
				</span>
				<div class="arrow variant-filled-tertiary" />
			</div>
		</span>
	</span>
</span>
