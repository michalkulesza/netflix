import React from "react";
import { SeekBar } from "../../components";

const SeekBarContainer = () => {
	return (
		<SeekBar>
			<SeekBar.Main>
				<SeekBar.SeekBarContainer>
					<SeekBar.SeekBarTotal>
						<SeekBar.SeekBarCurrent></SeekBar.SeekBarCurrent>
					</SeekBar.SeekBarTotal>
				</SeekBar.SeekBarContainer>
				<SeekBar.SeekIndicator></SeekBar.SeekIndicator>
			</SeekBar.Main>
			<SeekBar.Time>1:34:25</SeekBar.Time>
		</SeekBar>
	);
};

export default SeekBarContainer;
