<script lang="ts">
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';

const popupClick: PopupSettings = {
	event: 'click',
	target: 'popupClick',
	placement: 'top'
};
</script>

<span class="longhorn text-2xl">
    <span class="[&>*]:pointer-events-none" use:popup={popupClick}>
        <span class="text-2xl">University of Texas at Austin</span>
        <span class="text-2xl">
            <div class="card p-4 variant-filled-tertiary" data-popup="popupClick">
                <span class="longhornGif">
                    <iframe title="GIPHY-GIF" src="https://giphy.com/embed/L2g7SGGUlP4GUFj9Vm" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/espn-sports-fan-sad-texas-L2g7SGGUlP4GUFj9Vm">via GIPHY</a></p>
                </span>
                <div class="arrow variant-filled-tertiary" />
            </div>
        </span>
    </span>
</span>