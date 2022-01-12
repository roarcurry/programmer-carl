package main

func search(nums []int, target int) int {
    left := 0
    right := len(nums) - 1
    for left <= right {
        middle := left + (right - left) / 2
        if nums[middle] == target {
            return middle
        } else if nums[middle] > target {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}

func main() {
    b :=[5]int{1,2,3,4,5}
    a := search(b, 2)
}
