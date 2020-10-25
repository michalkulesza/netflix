import React from "react";
import { VolumeSlider } from "../../components";

const VolumeSliderContainer = ({ visible }) => {
	return (
		<VolumeSlider visible={visible}>
			<VolumeSlider.Volume>
				<VolumeSlider.VolumeBarContainer>
					<VolumeSlider.VolumeBar>
						<VolumeSlider.VolumeBarCurrent></VolumeSlider.VolumeBarCurrent>
					</VolumeSlider.VolumeBar>
					<VolumeSlider.VolumeBarIndicator></VolumeSlider.VolumeBarIndicator>
				</VolumeSlider.VolumeBarContainer>
			</VolumeSlider.Volume>
		</VolumeSlider>
	);
};

export default VolumeSliderContainer;
