import {JsHelpers} from "@/_common/services/js-helpers";
import {MazeAlgorithm} from "../../../_common/services/maze-algorithm";
import {Direction} from "@/_common/models/direction";
import {Maze} from "@/app/algorithms/_common/models/maze";
import {MazeNode} from "@/app/algorithms/_common/models/maze-node";

export class DepthFirstSearchAlgorithm extends MazeAlgorithm {

    public override removeWalls(maze: Maze, visitedNodes: Set<MazeNode>): void {
        const rowIndex = JsHelpers.randomInt(0, maze.rowsCount - 1);
        const columnIndex = JsHelpers.randomInt(0, maze.columnsCount - 1);

        this.backTrack(maze, visitedNodes, rowIndex, columnIndex)
    }

    private backTrack(maze: Maze, visitedNodes: Set<MazeNode>, rowIndex: number, columnIndex: number): void {
        const node = maze.grid[rowIndex][columnIndex];
        visitedNodes.add(node);

        JsHelpers.shuffleArray(this.directions).forEach(direction => {
            switch (direction) {
                case Direction.North: {
                    this.backTrackNorth(maze, visitedNodes, rowIndex, columnIndex);
                    break;
                }
                case Direction.East: {
                    this.backTrackEast(maze, visitedNodes, rowIndex, columnIndex);
                    break;
                }
                case Direction.South: {
                    this.backTrackSouth(maze, visitedNodes, rowIndex, columnIndex);
                    break;
                }
                case Direction.West: {
                    this.backTrackWest(maze, visitedNodes, rowIndex, columnIndex);
                    break;
                }
            }
        })
    }

    private backTrackNorth(maze: Maze, visitedNodes: Set<MazeNode>, rowIndex: number, columnIndex: number): void {
        const index = rowIndex - 1;
        if (index < 0) {
            return;
        }

        const node = maze.grid[index][columnIndex];
        if (visitedNodes.has(node)) {
            return;
        }

        maze.grid[index][columnIndex].isWallOnSouth = false;
        maze.grid[rowIndex][columnIndex].isWallOnNorth = false;
        this.backTrack(maze, visitedNodes, index, columnIndex);
    }

    private backTrackEast(maze: Maze, visitedNodes: Set<MazeNode>, rowIndex: number, columnIndex: number): void {
        const index = columnIndex + 1;
        if (index > maze.columnsCount - 1) {
            return;
        }

        const node = maze.grid[rowIndex][index];
        if (visitedNodes.has(node)) {
            return;
        }
        maze.grid[rowIndex][index].isWallOnWest = false;
        maze.grid[rowIndex][columnIndex].isWallOnEast = false;
        this.backTrack(maze, visitedNodes, rowIndex, index);
    }

    private backTrackSouth(maze: Maze, visitedNodes: Set<MazeNode>, rowIndex: number, columnIndex: number): void {
        const index = rowIndex + 1;
        if (index > maze.rowsCount - 1) {
            return;
        }

        const node = maze.grid[index][columnIndex];
        if (visitedNodes.has(node)) {
            return;
        }
        maze.grid[index][columnIndex].isWallOnNorth = false;
        maze.grid[rowIndex][columnIndex].isWallOnSouth = false;
        this.backTrack(maze, visitedNodes, index, columnIndex);
    }

    private backTrackWest(maze: Maze, visitedNodes: Set<MazeNode>, rowIndex: number, columnIndex: number): void {
        const index = columnIndex - 1;
        if (index < 0) {
            return;
        }

        const node = maze.grid[rowIndex][index];
        if (visitedNodes.has(node)) {
            return;
        }
        maze.grid[rowIndex][index].isWallOnEast = false;
        maze.grid[rowIndex][columnIndex].isWallOnWest = false;
        this.backTrack(maze, visitedNodes, rowIndex, index);
    }
}