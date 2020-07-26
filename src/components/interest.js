import React from "react";
import { Grid, Cell } from "react-mdl";

function Interest(props) {
	return (
		<div>
            <Grid>
                <Cell col={4}>
                    
                </Cell>
				
				
				<Cell col={8}>				
					<p>{props.hobbiesDescription}</p>
				</Cell>
			</Grid>
		</div>
	);
}

export default Interest;
